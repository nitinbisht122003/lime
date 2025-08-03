"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  blogCardContentStyle,
  blogCardDescriptionStyle,
  blogCardImageStyle,
  blogCardLinkStyle,
  blogCardStyle,
  blogCardTitleStyle,
  imageSize
} from "./styles";

const SCOPE = "BLOG_CARD";

type IContext = IStyleContext<typeof blogCardStyle>;

const BlogCardRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type IBlogCardProps = ComponentPropsWithVariants<typeof BlogCardRoot, typeof blogCardStyle>;

export function BlogCard({ className, size = "md", children, ...props }: IBlogCardProps) {
  return (
    <BlogCardRoot
      {...props}
      className={blogCardStyle({ size, class: className })}
      context={{ size }}
    >
      {children}
    </BlogCardRoot>
  );
}

type IBlogCardTitleProps = ComponentPropsWithVariants<typeof Text, typeof blogCardTitleStyle>;

export function BlogCardTitle({ className, children, ...props }: IBlogCardTitleProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View className="relative flex-1">
      <Text
        {...props}
        className={blogCardTitleStyle({
          parentVariants: { size },
          class: className
        })}
        bold
      >
        {children}
      </Text>
    </View>
  );
}

type IBlogCardImageProps = ComponentPropsWithVariants<typeof Image, typeof blogCardImageStyle>;

export function BlogCardImage({ className, aspect = "sqaure", ...props }: IBlogCardImageProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Image
      {...props}
      size={imageSize[size]}
      className={blogCardImageStyle({
        aspect,
        parentVariants: { size },
        class: className
      })}
    />
  );
}

type IBlogCardContentProps = ComponentPropsWithVariants<typeof View, typeof blogCardContentStyle>;

export function BlogCardContent({ className, children, ...props }: IBlogCardContentProps) {
  return (
    <View
      {...props}
      className={blogCardContentStyle({
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IBlogCardDescriptionProps = ComponentPropsWithVariants<
  typeof Text,
  typeof blogCardDescriptionStyle
>;

export function BlogCardDescription({ className, children, ...props }: IBlogCardDescriptionProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  return (
    <Text
      {...props}
      className={blogCardDescriptionStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IBlogCardLinkProps = Omit<
  ComponentPropsWithVariants<typeof Text, typeof blogCardLinkStyle>,
  "href"
> & {
  href: string;
};

export function BlogCardLink({ className, href, children }: IBlogCardLinkProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={blogCardLinkStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children} →
    </a>
  );
}
