import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { faker } from '@faker-js/faker';

async function uploadBuffer(
  buffer: Buffer,
  name: string,
  mimeType: string = 'application/octet-stream',
): Promise<string> {
  const s3Client = new S3Client({ region: process.env.AWS_REGION });

  const command = new PutObjectCommand({
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.AWS_S3_BUCKET,
    ContentType: mimeType,
    Key: name,
  });

  await s3Client.send(command);

  return `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${name}`;
}

export const IMAGES_POST: RouteOptions<any, any, any, any> = {
  handler: async (
    request: FastifyRequest<{ Body: Buffer }>,
    reply: FastifyReply,
  ) => {
    reply.status(200).send({
      url: await uploadBuffer(
        request.body,
        faker.string.ulid(),
        request.headers['content-type'] || 'application/octet-stream',
      ),
    });
  },
  method: 'POST',
  url: '/api/v1/storage',
};
