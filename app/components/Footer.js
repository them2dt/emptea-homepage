export default function Footer() {
  return (
    <div className="footer flex-row-center-center">
      <div className="footer-content flex-row-between-center">
        <div className="footer-left">
          <div className="font-text-tiny">© 2024 Emptea Studios</div>
        </div>
        <div className="footer-right flex-row-center-center">
          <div className="font-text-tiny">
            <a
              href="https://twitter.com/them2dt"
              target="_blank"
              className="footer-link"
            >
              Founded by M2DT.
            </a>
          </div>
          <a
            href="https://twitter.com/empteastudios"
            target="_blank"
            className="footer-link font-text-tiny"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
