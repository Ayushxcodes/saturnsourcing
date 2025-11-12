import ServiceDetail from "@/components/Services/ServiceDetail";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: Props) {
  return <ServiceDetail slug={params.slug} />;
}
