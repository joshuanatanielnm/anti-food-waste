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
          },
        },
      },
    });
    return res.send({ posting });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getDetailPosting: RouteHandlerMethod = async (req, res) => {
  try {
    const { id } = req.query as any;
    const postingDetail = await prisma.posting.findUnique({
      where: {
        id: parseInt(id),
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

export const removePosting: RouteHandlerMethod = async (req, res) => {
  try {
    const { postingId } = req.query as any;
    const { ...posting } = await prisma.posting.delete({
      where: {
        id: parseInt(postingId),
      },
    });
    return res.send({ posting });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserPosting: RouteHandlerMethod = async (
  req: FastifyRequest<{ Querystring: { userId: string } }>,
  res: FastifyReply
) => {
  try {
    const { userId } = req.query;
    const userPosting = await prisma.posting.findMany({
      where: {
        userId: parseInt(userId),
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
          },
        },
      },
    });
    return res.send({ userPosting });
  } catch (error) {
    res.status(500).send(error);
  }
};
