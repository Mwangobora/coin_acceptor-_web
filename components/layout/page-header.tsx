export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 min-w-0">
      <h1 className="text-2xl font-semibold text-foreground lg:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
