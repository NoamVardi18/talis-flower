export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const OWNER_NAME = "טלי";
export const SHOP_NAME = "Tali's Flower";
export const OWNER_PHONE = "+972524040228";
export const OWNER_PHONE_DISPLAY = "052-404-0228";
export const OWNER_WHATSAPP = "972524040228";
export const OWNER_LOCATION = "אילת";

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "מיכל כהן",
    date: "לפני שבוע",
    rating: 5,
    text: "הזרים שהזמנתי לאמא שלי ליום הולדת היו פשוט מהממים. טלי ידעה בדיוק מה להמליץ, הסידור יצא קסום ועשה אמא שלי מאושרת מאוד. תודה רבה!",
  },
  {
    id: "2",
    name: "דנה לוי",
    date: "לפני חודש",
    rating: 5,
    text: "הזמנתי זר כלה לחתונה שלי והוא עלה על כל ציפיותיי. טלי הקשיבה לכל פרט קטן ויצרה משהו מושלם לגמרי. ממליצה בחום לכל כלה!",
  },
  {
    id: "3",
    name: "יוסי אברהם",
    date: "לפני חודשיים",
    rating: 5,
    text: "קניתי זר ורדים לאשתי ביום הנישואין שלנו. הפרחים היו טריים, מסודרים יפה ועמדו שבוע שלם. השירות האישי של טלי הוא ברמה אחרת לגמרי.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "bouquets",
    title: "זרים ועיצובים",
    description: "זרי פרחים טריים מותאמים אישית לכל אירוע ומצב רוח. מוורדים קלאסיים ועד פרחי בר עדינים.",
    icon: "Flower"
  },
  {
    id: "weddings",
    title: "חתונות ואירועים",
    description: "עיצוב פרחוני מלא לחתונות, בר מצוות ואירועים מיוחדים. מזר כלה ועד עיצוב שולחנות.",
    icon: "Heart"
  },
  {
    id: "gifts",
    title: "מתנות ומשלוחים",
    description: "שולחים אהבה לכל מקום באילת. משלוחי פרחים לכל אירוע — יום הולדת, יום נישואין, ואפילו סתם כי בא לך.",
    icon: "Gift"
  },
  {
    id: "plants",
    title: "צמחי בית ועציצים",
    description: "מגוון צמחי עיצוב וצמחי בית בעציצים יפים. מתנה מושלמת שנשארת לאורך זמן.",
    icon: "Leaf"
  }
];

export const COOKIE_NAME = "talis-flower-auth";
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
