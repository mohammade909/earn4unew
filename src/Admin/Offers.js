// Offers List Component
import React, { useState, useEffect } from "react";

import { Trash2, Eye, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { fetchOffers, deleteOffer, resetState } from "../redux/offer";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import CountdownTimer from "../CoreFile/Timer";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
export function Card({ children, className, ...props }) {
  return (
    <div
      className={`border rounded-lg shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`p-4 border-b bg-gray-50 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h2
      className={`text-xl font-semibold text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={`text-sm text-gray-500 mt-1 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        rounded-md 
        transition-colors 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const variantStyles = {
    default: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`
        px-2 py-1 
        rounded-full 
        text-xs 
        font-medium 
        ${variantStyles[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

const OffersListComponent = () => {
  const dispatch = useDispatch();
  const { offers, message, error } = useSelector((state) => state.offers);
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  //   const [offers, setOffers] = useState([
  //     {
  //       id: 1,
  //       title: "Social Media Marketing Campaign",
  //       description:
  //         "Create engaging content for our brand's social media channels",
  //       businessVal: 5000,
  //       reward: 500,
  //       startDate: "2024-03-01",
  //       endDate: "2024-04-30",
  //       status: "Active",
  //     },
  //     {
  //       id: 2,
  //       title: "Customer Feedback Survey",
  //       description: "Conduct a comprehensive customer satisfaction survey",
  //       businessVal: 3000,
  //       reward: 300,
  //       startDate: "2024-02-15",
  //       endDate: "2024-03-15",
  //       status: "Pending",
  //     },
  //     // More offers...
  //   ]);

  const [currentPage, setCurrentPage] = useState(1);
  const offersPerPage = 4;

  // Pagination calculations
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = offers?.slice(indexOfFirstOffer, indexOfLastOffer);
  const totalPages = Math.ceil(offers.length / offersPerPage);

  // Handlers
  const handleDelete = (id) => {
    // Implement delete logic
    dispatch(deleteOffer(id));
    console.log(`Delete offer ${id}`);
  };

  const handleView = (offer) => {
    // Implement view details logic
    console.log("View offer", offer);
  };

  const handleUpdate = (id) => {
    // Implement update logic
    console.log(`Update offer ${id}`);
  };

  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        dispatch(resetState());
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [message, error, dispatch]);
  return (
    <div className="container mx-auto px-4 bg-gradient-to-br from-blue-50 to-indigo-100 py-5">
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      <Card className="mb-4">
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle>Available Offers</CardTitle>
            <CardDescription>
              Explore current opportunities and rewards
            </CardDescription>
          </div>
          <Button>
            <Link to={"/admin/offer-form"}>Create Offer</Link>
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4">
        {currentOffers?.map((offer) => (
          <Card
            key={offer.offer_id}
            className="hover:shadow-md transition-shadow bg-white"
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{offer.title}</CardTitle>
                <Badge
                  variant={
                    offer.status === "Active"
                      ? "green"
                      : offer.status === "Pending"
                      ? "yellow"
                      : "default"
                  }
                >
                  {offer.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm  mb-2">{offer.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Business Value:</span>
                  <span className="text-sm">${offer.business_val}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Reward:</span>
                  <span className="text-sm">${offer.reward}</span>
                </div>
                <div className="mb-8 flex justify-center">
                  <CountdownTimer
                    startDate={offer.start_date}
                    endDate={offer.end_date}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Start Date:</span>
                  <span className="text-sm">
                    {format(new Date(offer.start_date), "MMMM dd, yyyy h:mm a")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">End Date:</span>
                  <span className="text-sm">
                    {format(new Date(offer.end_date), "MMMM dd, yyyy h:mm a")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Available For :</span>
                  <span className="text-sm">
                    {offer.users ==1 ? 'All Users' :'Particular Users'}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleView(offer)}
                  className="hover:bg-blue-50"
                >
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleUpdate(offer.id)}
                  className="hover:bg-yellow-50"
                >
                  <Edit className="h-4 w-4 mr-2" /> Update
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(offer.offer_id)}
                  className="hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        <span className="self-center text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default OffersListComponent;
