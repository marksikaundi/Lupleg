"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const mockData = [
  {
    month: "Jan",
    earnings: 5000,
    subscriptions: 3000,
    oneTime: 1500,
    other: 500,
  },
  {
    month: "Feb",
    earnings: 7500,
    subscriptions: 4500,
    oneTime: 2200,
    other: 800,
  },
  {
    month: "Mar",
    earnings: 6800,
    subscriptions: 4000,
    oneTime: 2000,
    other: 800,
  },
  {
    month: "Apr",
    earnings: 9200,
    subscriptions: 5500,
    oneTime: 2800,
    other: 900,
  },
  {
    month: "May",
    earnings: 8100,
    subscriptions: 4800,
    oneTime: 2500,
    other: 800,
  },
  {
    month: "Jun",
    earnings: 11500,
    subscriptions: 7000,
    oneTime: 3500,
    other: 1000,
  },
  {
    month: "Jul",
    earnings: 10200,
    subscriptions: 6200,
    oneTime: 3000,
    other: 1000,
  },
  {
    month: "Aug",
    earnings: 12800,
    subscriptions: 7800,
    oneTime: 3800,
    other: 1200,
  },
  {
    month: "Sep",
    earnings: 14500,
    subscriptions: 8800,
    oneTime: 4500,
    other: 1200,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function LuplegDasboard() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Dec");

  const totalEarnings = mockData.reduce((sum, item) => sum + item.earnings, 0);
  const averageEarnings = totalEarnings / mockData.length;

  const selectedMonthData =
    mockData.find((item) => item.month === selectedMonth) ||
    mockData[mockData.length - 1];
  const pieChartData = [
    { name: "Subscriptions", value: selectedMonthData.subscriptions },
    { name: "One-time Purchases", value: selectedMonthData.oneTime },
    { name: "Other", value: selectedMonthData.other },
  ];

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <CardTitle className="text-xl sm:text-2xl">
              Lupleg Monthly Revenue{" "}
            </CardTitle>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.map((item) => (
                    <SelectItem key={item.month} value={item.month}>
                      {item.month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardDescription>
            Overview of your monthly earnings for {selectedYear}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold">
                  ${totalEarnings.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Average Monthly Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold">
                  $
                  {averageEarnings.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Monthly Earnings Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] sm:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="earnings" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Earnings Breakdown for {selectedMonth}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] sm:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Subscriptions</TableHead>
                  <TableHead className="text-right">One-time</TableHead>
                  <TableHead className="text-right">Other</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((item) => (
                  <TableRow key={item.month}>
                    <TableCell>{item.month}</TableCell>
                    <TableCell className="text-right">
                      ${item.earnings.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.subscriptions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.oneTime.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.other.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
