import { screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { render } from "@/test/test-utils";

import { StatusBadge } from "./status-badge";

test("renders readable status text", () => {
  render(<StatusBadge variant="online" />);

  expect(screen.getByText("Online")).toBeInTheDocument();
});
