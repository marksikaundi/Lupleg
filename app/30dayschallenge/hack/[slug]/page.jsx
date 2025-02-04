
  
  export default function ChallengePage({ params }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2D1537] mb-6">Challenge Details: {params.slug}</h1>
        {/* Add challenge details content here */}
      </div>
    )
  }
  