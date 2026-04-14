import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-32 px-8 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <AlertTriangle className="w-16 h-16 text-primary mx-auto" />
        <div className="font-mono text-primary text-xs tracking-widest uppercase">
          ERROR_CODE: 404 // NODE_NOT_FOUND
        </div>
        <h2 className="text-4xl font-bold text-white uppercase">
          Sector Not Found
        </h2>
        <p className="text-tertiary text-sm leading-relaxed">
          The requested node does not exist within the Sovereign OS boundary.
          No data was transmitted. No egress events occurred.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary-container text-white px-8 py-3 font-display font-bold text-[10px] tracking-widest uppercase rounded-lg hover:opacity-90 transition-all"
        >
          Return to Base Node
        </Link>
      </div>
    </section>
  );
}
