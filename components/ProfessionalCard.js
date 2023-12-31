import Link from 'next/link';

export default function ProfessionalCard({ professional }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href={`/professionals/${professional.slug}`}>
        <a>
          <img className="w-full" src={professional.featuredImage.node.mediaItemUrl} alt={professional.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{professional.title}</div>
            <p className="text-gray-700 text-base">
              {/* Content can go here if needed */}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
