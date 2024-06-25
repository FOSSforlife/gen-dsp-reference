import './App.css';
import { Item } from './components/Item';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table';

function App() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Compatibility </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {['abc', 'def'].map(() => (
            <Item></Item>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
