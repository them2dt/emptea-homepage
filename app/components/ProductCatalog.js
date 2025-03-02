import Link from "next/link";

export default function ProductCatalog() {
  const products = [
    {
      title: "Votables",
      description: "Vote on anything.",
      status: "Coming Soon",
      link: "/votables"
    },
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
