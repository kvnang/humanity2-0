import clsx from "clsx";

export function Input({
  label,
  ...props
}: { label: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  const id = props.id || `form-field-${props.name}`;

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <div className="mb-1">
          <span className="font-heading font-semibold text-gray-700 text-sm">
            {label}{" "}
            {props.required ? (
              <abbr title="required" className="no-underline text-error">
                *
              </abbr>
            ) : null}
          </span>
        </div>
        <input
          {...props}
          id={id}
          className={clsx(
            `w-full px-4 py-3 border border-gray-50 shadow-md rounded-md outline-offset-4 disabled:bg-gray-50 disabled:border-gray-50 aria-[invalid=true]:[&:not([disabled])]:border-error`,
            props.className
          )}
        />
      </label>
    </>
  );
}

export function Textarea({
  label,
  ...props
}: { label: string } & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) {
  const id = props.id || `form-field-${props.name}`;

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <div className="mb-1">
          <span className="font-heading font-semibold text-gray-700 text-sm">
            {label}{" "}
            {props.required ? (
              <abbr title="required" className="no-underline text-error">
                *
              </abbr>
            ) : null}
          </span>
        </div>
        <textarea
          {...props}
          id={id}
          className={clsx(
            `w-full px-4 py-3 border border-gray-50 shadow-md rounded-md outline-offset-4 disabled:bg-gray-50 disabled:border-gray-50 aria-[invalid=true]:[&:not([disabled])]:border-error`,
            `resize-y`,
            props.className
          )}
          rows={props.rows || 3}
        />
      </label>
    </>
  );
}
