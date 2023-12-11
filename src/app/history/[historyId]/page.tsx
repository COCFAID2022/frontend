// eslint-disable-next-line check-file/folder-naming-convention
import { SelectedHistoryScreen } from '@/components/screens/selected-history-page';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

type Props = {
  historyId: string;
};

export default function SelectedHistoryPage({ params }: { params: Props }) {
  const { historyId } = params;
  return (
    <>
      <p>{historyId}</p>
      <SelectedHistoryScreen />
    </>
  );
}
