import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const chapterId = params.id;

  try {
    // Thực hiện cập nhật không đồng bộ để tối ưu performance cho người đọc
    const updatedChapter = await prisma.chapter.update({
      where: { id: chapterId },
      data: { views: { increment: 1 } },
      select: { novelId: true }
    });

    // Đồng bộ tăng view tổng của bộ truyện
    await prisma.novel.update({
      where: { id: updatedChapter.novelId },
      data: { views: { increment: 1 } }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}