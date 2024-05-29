import { DocumentRenderer } from '@keystatic/core/renderer';
import { reader } from '../../lib/reader';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  return (
    <div className='border p-5 rounded-lg'>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className='w-full'>
        <DocumentRenderer document={await post.content()} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map(slug => ({
    slug,
  }));
}
