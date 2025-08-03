import type { ComponentProps } from "react";

import type { BlogViewModel } from "@app/types/limeroad";
import {
  BlogCardContent,
  BlogCardDescription,
  BlogCardImage,
  BlogCardLink,
  BlogCardTitle,
  BlogCard as UIBlogCard
} from "@app/ui/components/blog-card";
import { View } from "@app/ui/elements/view";

type BlogCardProps = ComponentProps<typeof UIBlogCard> & {
  blog: BlogViewModel;
};

export function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <UIBlogCard className={className}>
      <View className="flex-1 flex-row">
        <BlogCardTitle>{blog.title}</BlogCardTitle>
        <BlogCardImage src={blog.image_url} alt={blog.title} />
      </View>
      <BlogCardContent>
        <BlogCardDescription>{blog.description}</BlogCardDescription>
        <BlogCardLink href={blog.link}>Read More</BlogCardLink>
      </BlogCardContent>
    </UIBlogCard>
  );
}
