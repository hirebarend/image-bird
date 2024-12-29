import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import axios from 'axios';
import sharp from 'sharp';

sharp.cache(false);

export const IMAGES_GET: RouteOptions<any, any, any, any> = {
  handler: async (
    request: FastifyRequest<{
      Params: { fqdn: string; '*': string };
      Querystring: {
        format: 'jpeg' | 'jpg' | 'png' | 'webp' | undefined;
        greyscale: string | undefined;
        resize: {
          fit: 'cover' | 'inside';
          height: string;
          width: string;
        };
      };
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

    const response = await axios.get(
      `https://${request.params.fqdn}/${request.params['*']}`,
      {
        responseType: 'arraybuffer',
      },
    );

    let x = sharp(response.data);

    if (request.query.resize) {
      x = x.resize({
        fit: request.query.resize.fit,
        height: parseInt(request.query.resize.height),
        width: parseInt(request.query.resize.width),
      });
    }

    x = x.toFormat(request.query.format || 'jpg');

    const buffer: Buffer = await x.toBuffer();

    const contentType: string = `image/${request.query.format || 'jpg'}`;

    reply.header('content-type', contentType).status(200).send(buffer);
  },
  method: 'GET',
  url: '/:fqdn/*',
  schema: {
    querystring: {
      type: 'object',
      properties: {
        format: {
          type: 'string',
          description: 'jpeg | jpg | png | webp',
          nullable: true,
        },
        'resize[fit]': {
          type: 'string',
          description: 'cover | inside',
          nullable: true,
        },
        'resize[height]': {
          type: 'number',
          description: '',
          nullable: true,
        },
        'resize[width]': {
          type: 'number',
          description: '',
          nullable: true,
        },
      },
    },
  },
};
