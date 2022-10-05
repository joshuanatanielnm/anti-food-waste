import { prisma } from '../helpers/utils';
import { FastifyReply, FastifyRequest, RouteHandlerMethod } from 'fastify';

export const addComment: RouteHandlerMethod = async (
  req: FastifyRequest<{ Body: any }>,
  res: FastifyReply
) => {
  try {
    const { ...comment } = await prisma.comment.create({
      data: req.body,
    });
    return res.send({ comment });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const removeComment: RouteHandlerMethod = async (req, res) => {
  try {
    const { commentId } = req.query as any;
    const { ...comment } = await prisma.comment.delete({
      where: {
        id: parseInt(commentId),
      },
    });
    return res.send({ comment });
  } catch (error) {
    res.status(500).send(error);
  }
};
