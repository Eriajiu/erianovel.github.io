"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Eye } from 'lucide-react';

interface NovelCardProps {
  title: string;
  slug: string;
  coverImage: string;
  rating: number;
  views: number;
  author: string;
}

export default function NovelCard({ title, slug, coverImage, rating, views, author }: NovelCardProps) {
  return (
    <Link href={`/novels/${slug}`}>
      <motion.div 
        whileHover={{ scale: 1.03, y: -5 }}
        className="group relative overflow-hidden rounded-xl bg-[#161a23] p-3 border border-white/5 shadow-2xl transition-all duration-300 hover:border-[#7c5cff]/40 hover:shadow-[#7c5cff]/10 hover:shadow-2xl"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image 
            src={coverImage} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="mt-3 space-y-1">
          <h3 className="font-sans font-bold text-sm md:text-base line-clamp-1 text-[#f5f7ff] group-hover:text-[#00d4ff] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xs text-[#a8b0c0]">{author}</p>
          
          <div className="flex items-center justify-between pt-2 text-xs text-[#a8b0c0]">
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}