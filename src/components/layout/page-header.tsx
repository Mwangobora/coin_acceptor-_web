export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 min-w-0">
      <h1 className="text-foreground text-2xl font-semibold lg:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}
