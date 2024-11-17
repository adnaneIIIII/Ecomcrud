import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
  
  function Page() {
    return (
      <div className="p-4  gap-4 flex-col md:flex-row">
        <div className="p-4  gap-4 flex-col md:flex-row">
        <Button asChild className="flex items-center gap-x-2 w-36">
          <Link href="./products/create" className="flex items-center">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Page</span>
          </Link>
        </Button>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Pages</CardTitle>
            <CardDescription>View all your Pages</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Privacy Policy</TableCell>
                  <TableCell>admin</TableCell>
                  <TableCell>2024-11-01</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size={"icon"}>
                          <MoreHorizontal className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className=" text-left py-2 border border-gray-300 border-opacity-50 rounded-lg"
                      >
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator className="mt-1" />
                        <DropdownMenuItem asChild>
                          <Link href="">Edite</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="">delete</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      </div>
    );
  }
  
  export default Page;
  