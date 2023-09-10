import Link from "next/link";

function Resume() {
  return (
    <Link
      href="https://docs.google.com/document/d/1ze2Zxe_kk-4HlbPCQluzdnDpELV5GmeMVpUYYvrHz2c/edit?usp=sharing"
      className="hover:font-semibold hover:underline"
      title="Google Doc"
      target="_blank"
      rel="noreferrer"
    >
      {`Check My Resume ->`}
    </Link>
  );
}
export default Resume;
