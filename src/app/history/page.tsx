export default function DescriptionPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>History page {params.slug}</div>;
}
