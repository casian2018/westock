// pages/api/deleteAccount.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import connectDB from '@/app/dbConfig/db';
import { userModel } from '@/app/dbConfig/models';

type UserModel = typeof userModel;

type Data = {
  message: string;
};

interface SessionUser {
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

const deleteAccountHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Ensure you have the correct user ID
  const userId = (session?.user?.id || '') as string; // Adjust this based on how you store user ID in session

  try {
    await connectDB(); // Ensure the database is connected

    const result = await userModel.deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: 'Account deleted successfully' });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting account:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteAccountHandler;
