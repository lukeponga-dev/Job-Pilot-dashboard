'use client';

import { formatDistanceToNow } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { JobApplication, JobStatus } from '@/lib/types';
import { MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

type ApplicationsTableProps = {
  applications: JobApplication[];
  onEdit: (application: JobApplication) => void;
};

const statusColors: Record<JobStatus, string> = {
    Applied: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    Interviewing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    Offer: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    Rejected: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
    Viewed: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    'Not selected': 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300',
    Expired: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    'Unlikely to progress': 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
};


export default function ApplicationsTable({ applications, onEdit }: ApplicationsTableProps) {
  if (applications.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-4 p-12 text-center">
            <h3 className="text-lg font-semibold">No Applications Found</h3>
            <p className="text-sm text-muted-foreground">Start by adding your first job application.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className='p-0'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead className="hidden sm:table-cell">Role</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id} className="cursor-pointer" onClick={() => onEdit(app)}>
                <TableCell>
                  <div className="font-medium">{app.company}</div>
                  <div className="text-sm text-muted-foreground md:hidden">{app.role}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{app.role}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className={`border-none ${statusColors[app.status]}`} variant="outline">
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDistanceToNow(new Date(app.lastUpdated), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenuItem onSelect={() => onEdit(app)}>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
