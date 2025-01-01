import Link from "next/link";

export default function ProductCatalog() {
  const products = [
    {
      title: "Preda",
      description: "Create any token on Solana.",
      status: "Coming Soon",
      link: "/preda"
    },
    {
      title: "Blocky",
      description: "Learn Blockchain, easy like never before!",
      status: "Coming Soon",
      link: "/blocky"
    },
    {
      title: "DeTier",
      description: "Rank projects on Solana.",
      status: "Live",
      link: "/detier"
    }
  ];

  return (
    <div className="product-catalog">
      {products.map((product) => (
        <Link
          key={product.title}
          href={product.link}
          target="_blank"
          className="product-link"
        >
          <div className="product-card">
            <div className="product-header">
              <div className="product-title font-h4">{product.title}</div>
              <div
                className={`product-status ${product.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {product.status}
              </div>
            </div>
            <div className="product-description font-text">
              {product.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
