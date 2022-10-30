import { prisma } from '../helpers/utils';
import { FastifyReply, FastifyRequest, RouteHandlerMethod } from 'fastify';

export const getAllPosting: RouteHandlerMethod = async (req, res) => {
  try {
    const posting = await prisma.posting.findMany({
      include: {
        Comment: {
          select: {
            comment: true,
            commentTime: true,
            User: {
              select: {
                userProfileName: true,
                id: true,
              },
            },
          },
        },
        User: {
          select: {
            userProfileName: true,
            id: true,
            userPhoneNumber: true,
          },
        },
      },
    });
    return res.send({ posting });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getDetailPosting: RouteHandlerMethod = async (
  req: FastifyRequest<{ Querystring: { postingId: number } }>,
  res: FastifyReply
) => {
  try {
    const { postingId } = req.query;
    const postingDetail = await prisma.posting.findFirst({
      where: {
        id: postingId,
      },
      include: {
        Comment: {
          select: {
            comment: true,
            commentTime: true,
            User: {
              select: {
                userProfileName: true,
                id: true,
                userImage: true,
                userPhoneNumber: true,
              },
            },
          },
        },
        User: {
          select: {
            userProfileName: true,
            id: true,
            userImage: true,
          },
        },
      },
    });

    return res.send({ postingDetail });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addPosting: RouteHandlerMethod = async (
  req: FastifyRequest<{ Body: any }>,
  res: FastifyReply
) => {
  try {
    const { ...posting } = await prisma.posting.create({
      data: req.body,
    });
    return res.send({ posting });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const removePosting: RouteHandlerMethod = async (
  req: FastifyRequest<{ Querystring: { postingId: number } }>,
  res: FastifyReply
) => {
  try {
    const { postingId } = req.query;
    const { ...posting } = await prisma.posting.delete({
      where: {
        id: postingId,
      },
    });
    return res.send({ posting });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserPosting: RouteHandlerMethod = async (
  req: FastifyRequest<{ Querystring: { userId: number } }>,
  res: FastifyReply
) => {
  try {
    const { userId } = req.query;
    const userPosting = await prisma.posting.findMany({
      where: {
        userId: userId,
      },
      include: {
        Comment: {
          select: {
            comment: true,
            commentTime: true,
            User: {
              select: {
                userProfileName: true,
                id: true,
              },
            },
          },
        },
        User: {
          select: {
            userProfileName: true,
            id: true,
            userPhoneNumber: true,
          },
        },
      },
    });
    return res.send({ userPosting });
  } catch (error) {
    res.status(500).send(error);
  }
};
