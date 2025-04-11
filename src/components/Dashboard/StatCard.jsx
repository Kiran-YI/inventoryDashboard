import { Card, CardContent } from "../ui/card";


export function StatCard({ title, value }) {
  return (
    <Card className="rounded-2xl shadow-md p-4">
      <CardContent>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-xl font-semibold text-blue-700">{value}</p>
      </CardContent>
    </Card>
  );
}
