import { Button } from "@/components/ui/button";
import React from "react";
function Copybtn({ aiResponse }: any) {
  return (
    <div>
      {" "}
      <div>
        <Button variant="ghost" className="text-primary border">
          Copy
        </Button>
      </div>
    </div>
  );
}

export default Copybtn;
