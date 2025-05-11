export default function DashboardStats({ dataCollection }) {
  return (
    <section className="grid sm:grid-cols-3 gap-5 mb-10">
      <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
        <h3 className="font-medium">Total Subscription</h3>
        <p className="text-2xl">{dataCollection.length}</p>
      </div>
      <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
        <h3 className="font-medium">Monthly Cost (£)</h3>
        <p className="text-2xl">
          {dataCollection
            .reduce((s, item) => s + Number(item.cost), 0)
            .toFixed(2)}
        </p>
      </div>
      <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
        <h3 className="font-medium">Yearly Cost (£)</h3>
        <p className="text-2xl">
          {dataCollection
            .reduce((s, item) => s + Number(item.cost) * 12, 0)
            .toFixed(2)}
        </p>
      </div>
    </section>
  );
}
