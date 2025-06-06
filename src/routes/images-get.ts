import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import axios from 'axios';
import sharp from 'sharp';

sharp.cache(false);

export const IMAGES_GET: RouteOptions<any, any, any, any> = {
  handler: async (
    request: FastifyRequest<{
      Params: { fqdn: string; options: string; '*': string };
    }>,
    reply: FastifyReply,
  ) => {
    if (
      !request.params.fqdn.match(
        /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}$)/,
      )
    ) {
      reply.status(400).send();

      return;
    }

    const options = request.params.options
      .split(',')
      .map((x) => x.split('='))
      .reduce(
        (dict, x) => {
          dict[x[0]] = x[1];

          return dict;
        },
        {} as Record<string, any>,
      );

    const response = await axios.get(
      `https://${request.params.fqdn}/${request.params['*']}`,
      {
        responseType: 'arraybuffer',
      },
    );

    let x = sharp(response.data);

    if (options['fit'] || options['height'] || options['width']) {
      x = x.resize({
        fit: options['fit'] || undefined,
        height: options['height'] ? parseInt(options['height']) : undefined,
        width: options['width'] ? parseInt(options['width']) : undefined,
      });
    }

    x = x.toFormat(options['format'] || 'jpg');

    const buffer: Buffer = await x.toBuffer();

    const contentType: string = `image/${options['format'] || 'jpg'}`;

    reply.header('content-type', contentType).status(200).send(buffer);
  },
  method: 'GET',
  url: '/:fqdn/:options/*',
};
