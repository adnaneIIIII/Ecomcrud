import Charts from "../components/charts";
import Usercard from "../components/Usecard";

export default function page() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-full">
        <Usercard type="users" />
      </div>
      {/* left */}
    </div>
  );
}
