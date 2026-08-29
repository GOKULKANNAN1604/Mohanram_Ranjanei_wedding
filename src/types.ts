export interface WeddingDetails {
  groomName: string;
  groomTitle: string;
  groomFamily: string;
  groomImg: string;
  brideName: string;
  brideTitle: string;
  brideFamily: string;
  brideImg: string;
  coupleImg: string;
  weddingDate: string; // ISO string e.g. "2026-09-13T08:45:00"
  
  // Engagement
  engagementDate: string;
  engagementVenue: string;
  engagementMapUrl: string;

  // Wedding / Muhurtham
  muhurthamDate: string;
  weddingVenue: string;
  weddingMapUrl: string;

  // Reception
  receptionDate: string;
  receptionVenue: string;
  receptionMapUrl: string;

  venueName: string;
  venueAddress: string;
  venueMapUrl: string;
  bgmAudioUrl: string;
  customMessage: string;
}

export interface WishItem {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}

export interface RsvpData {
  name: string;
  phone: string;
  attending: 'yes' | 'no' | 'maybe';
  guestCount: number;
  diet: 'veg' | 'non-veg';
  wishes?: string;
}
