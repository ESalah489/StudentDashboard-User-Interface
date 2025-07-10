import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { getAllQuizzes, deleteQuizzes } from "../../api/quizzes";

const columns = [
  { label: "ID", minWidth: 70 },
  { label: "Name", minWidth: 150 },
  { label: "Subject", minWidth: 150 },
  { label: "Description", minWidth: 200 },
  { label: "Date", minWidth: 120 },
  { label: "Duration", minWidth: 100 },
  { label: "Total Marks", minWidth: 100 },
  { label: "Actions", minWidth: 120, align: "right" },
];

const getKeyFromLabel = (label) => {
  const map = {
    id: "_id",
    name: "name",
    subject: "subject",
    description: "discription",
    date: "date",
    duration: "duration",
    "total marks": "totalMarks",
  };
  return map[label.toLowerCase()] || label.toLowerCase();
};

const QuizzesTables = ({ reload = false, onEdit }) => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const fetchData = async () => {
    try {
      const res = await getAllQuizzes();
      setRows(res.data.quizzes || []);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  const handleDelete = async (id) => {
    try {
      await deleteQuizzes(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="py-2">
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="py-5 px-1 mb-5 my-3"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="quiz table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "600" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const key = getKeyFromLabel(column.label);

                      if (key === "actions") {
                        return (
                          <TableCell key={column.label} align={column.align}>
                            <div className="flex items-center justify-end gap-2">
                              <span
                                className="text-xl text-blue-600 cursor-pointer"
                                title="Edit"
                                onClick={() => onEdit(row)}
                              >
                                <FaEdit />
                              </span>
                              <span
                                className="text-xl text-red-600 cursor-pointer"
                                title="Delete"
                                onClick={() => handleDelete(row._id)}
                              >
                                <MdDelete />
                              </span>
                            </div>
                          </TableCell>
                        );
                      }

                      let value = row[key];
                      if (key === "date") {
                        value = new Date(value).toLocaleDateString();
                      }

                      return (
                        <TableCell key={column.label} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default QuizzesTables;
