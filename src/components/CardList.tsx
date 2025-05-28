import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const latestTransactions = [
  {
    id: 1,
    title: " Hot Off the Press! Live Sales Ticker",
    badge: "Sales",
    image:
      "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 7300,
  },
  {
    id: 2,
    title: "Sponsor/Vendor Announcement Carousels",
    badge: "Advertising",
    image:
      "https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 8200,
  },
  {
    id: 3,
    title: "Limited-Time Transaction Alerts",
    badge: "Marketing",
    image:
      "https://images.pexels.com/photos/8292793/pexels-photo-8292793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 7400,
  },
  {
    id: 4,
    title: "Milestone Celebrations",
    badge: "Community",
    image:
      "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 9500,
  },
  {
    id: 5,
    title: "Payment Milestones",
    badge: "Payments",
    image:
      "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 8200,
  },
];

const popularContent  = [
  {
    id: 1,
    title: "Interactive Polls & Quizzes",
    badge: "khalid",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4400,
  },
  {
    id: 2,
    title: "Sneak Peek Teasers",
    badge: "Ameera Hamza",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 6100,
  },
  {
    id: 3,
    title: "Speaker/Performer Highlights",
    badge: "Kainat Ali",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 7300,
  },
  {
    id: 4,
    title: "User-Generated Content (UGC) Campaign",
    badge: "Sundas Malik",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 8500,
  },
  {
    id: 5,
    title: "Live Behind-the-Scenes Coverage",
    badge: "Sardar Ali",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 7400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
