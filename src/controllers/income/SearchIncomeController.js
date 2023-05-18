import IncomeModel from "../../models/income/income.js";

const searchIncome = async (req, res) => {
  try {
    const { value, dateRange } = req.query;

    const filters = {};

    if (value) {
      filters.$or = [
        { name: { $regex: value, $options: "i" } },
        { incomeHead: { $regex: value, $options: "i" } },
      ];
    }

    if (dateRange) {
      const currentDate = new Date();

      switch (dateRange) {
        case "today":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1
            ),
          };
          break;
        case "thisWeek":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay() + 7
            ),
          };
          break;
        case "lastWeek":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay() - 7
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay()
            ),
          };
          break;
        case "thisMonth":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              1
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              1
            ),
          };
          break;
        case "lastMonth":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() - 1,
              1
            ),
            $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          };
          break;
        case "last3Months":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() - 3,
              1
            ),
            $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          };
          break;
        case "last6Months":
          filters.date = {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() - 6,
              1
            ),
            $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          };
          break;
        case "thisYear":
          filters.date = {
            $gte: new Date(currentDate.getFullYear(), 0, 1),
            $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
          };
          break;
        case "custom":
          const { fromDate, toDate } = req.query;
          if (fromDate && toDate) {
            filters.date = {
              $gte: new Date(fromDate),
              $lt: new Date(toDate),
            };
          }
          break;
        default:
          break;
      }
    }

    if (!value && !dateRange) {
      return res
        .status(400)
        .send("Please provide a value or date range for filtering.");
    }
    const data = await IncomeModel.find(filters);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export { searchIncome };
