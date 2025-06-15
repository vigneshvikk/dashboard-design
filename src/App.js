import { HiUsers } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Tooltip } from "bootstrap";
import './App.css'
import ReactApexChart from "react-apexcharts";


function App() {

  const [cusOrProf,setCussOrProf]=useState(null)
const [selectedProf,setSelectedProf]=useState(null)
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => {
      new Tooltip(el, {
        placement: el.getAttribute("data-bs-placement"),
        boundary: "window",
        container: "body",
      });
    });
    setCussOrProf(null)
  }, []);

  console.log(cusOrProf);

  const [state, setState] = useState({
    series: [
      {
        name: "customer",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "proficients",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "month",
        categories: ["jan", "feb", "mar", "apr", "may", "jun", "jul"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  

  const [chartData] = useState({
    series: [42, 47, 52, 58],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ['Active User', 'In Active User','Active Proficient' ,'In Active Proficient'],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
     
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
    },
  });

  
const users = [
  {
    name: "Alice Johnson",
    role: "Administrator",
    status: "active",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Bob Smith",
    role: "Editor",
    status: "inactive",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Charlie Rose",
    role: "Viewer",
    status: "active",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Charlie Rose",
    role: "Viewer",
    status: "active",
    image: "https://i.pravatar.cc/40?img=3",
  },
];

  return (
    <div className="container-fluid">
      {/*header part */}
      <div className="p-1 d-flex justify-content-between align-items-center  gap-4  border-bottom">
        {/* Date Icon */}

        <div className="w-25 fixed">
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Date"
            className="bg-warning d-flex align-items-center justify-content-center rounded-5 rounded-top-0 cursor-pointer"
            style={{ width: "50px", height: "50px" }}
          >
            <FaCalendarAlt />
          </div>
        </div>

        {/* Users + Divider + Proficients */}
        <div className=" flex-1 d-flex align-items-center gap-2  scroll-container">
          {/* Customers Icon */}

          <div className="fixed p-1">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Customers"
              className={`bg-warning d-flex align-items-center justify-content-center rounded-circle cursor-pointer 
      ${
        cusOrProf === false
          ? "border border-5 border-success transition-active"
          : ""
      } transition-border `}
              style={{ width: "50px", height: "50px" }}
              onClick={() => setCussOrProf(false)}
            >
              <HiUsers className="fs-3 text-white" />
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="border-end border-1 "
            style={{ width: "1px", height: "35px" }}
          ></div>

          {/* Proficients Icon */}
          <div className=" ">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Proficients"
              className={`bg-warning d-flex align-items-center justify-content-center rounded-5 cursor-pointer transition-border ${
                cusOrProf === true ? "d-none" : ""
              }`}
              style={{ width: "50px", height: "50px" }}
              onClick={() => setCussOrProf(true)}
            >
              <FaCalendarAlt />
            </div>

            <div className="d-flex align-items-center justify-content-start gap-2 px-2">
              {cusOrProf === true &&
                [
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 2, 2, 3, 3, 4, 45, 22, 33,
                  44, 55, 66, 77, 88, 99, 11, 222, 333, 444, 555, 666, 77, 777,
                  888, 8889, 2, 3, 455, 6, 7, 78, 877, 66, 5, 5, 5, 55,
                ].map((d, i) => (
                  <div
                    key={i}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Proficients"
                    onClick={() => setSelectedProf(d)}
                    className={`bg-warning d-flex align-items-center justify-content-center rounded-5 cursor-pointer ${
                      selectedProf === d ? "border border-3 border-primary" : ""
                    }`}
                    style={{ width: "40px", height: "40px", flex: "0 0 auto" }}
                  >
                    <FaCalendarAlt />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/*grid designs */}
      <div className="container-fluid">
        <div className="row pb-1 ">
          <div className="col-12 col-md-8">
            <h2 className="mb-4 text-secondary">Overview</h2>
            <div className="row g-4">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-4 col-xl-4">
                  <div className="card shadow-sm text-center border-0 h-100">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <h1 className="mb-1 fw-bold text-primary">100</h1>
                      <p className="mb-0 text-muted">Total Appointments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-12 shadow-sm mt-1">
                <div className="col-12 fs-4 bold text-secondary ">
                  Customer Vs Proficents
                </div>
                <div className="p-2">
                  <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-lg-3">
            <div className="row">
              <div className="col-12 shadow-sm mt-1">
                <div className="p-2">
                  <div className="container text-center mt-4">
                    <h4 className="mb-4">Active InActive</h4>
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="polarArea"
                      width={380}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-9 col-lg-9 mt-lg-3 ">
            <div className="row">
              <div className="container ms-2">
                <div className="d-flex align-item-center justify-content-end gap-2 p-1">
                <button className='btn btn-primary '>Export</button>
                <button className='btn btn-info '>View More</button>
                </div>
                <table className="table table-bordered table-hover text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={user.image}
                            alt={user.name}
                            className="rounded-circle"
                            width="40"
                            height="40"
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                          <span
                            className={`badge  ${
                              user.status === "active"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {user.status.charAt(0).toUpperCase() +
                              user.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );

}

export default App;
