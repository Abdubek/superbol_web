
import { Typography } from "@/shared/ui/Typography";
import { QrScanner } from "@/features/Scanner";

export default async function CabinetScannerPage() {


  return (
    <main>
      <Typography size="h3" className="mb-3">
        Сканнер
      </Typography>

      <QrScanner />
    </main>
  );
}
