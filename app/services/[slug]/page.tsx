import ServiceDetail from "@/components/Services/ServiceDetail";

interface Props {
  params: {
    slug: string;
  };
}

// ✅ REQUIRED for static export
export async function generateStaticParams() {
  return [
    { slug: "accounting-outsourcing" },
    { slug: "tax-consulting" },
    { slug: "business-advisory" },
    { slug: "financial-planning" },
    { slug: "training-development" },
  ];
}

export default function ServicePage({ params }: Props) {
  return <ServiceDetail slug={params.slug} />;
}
