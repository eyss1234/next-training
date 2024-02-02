// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  title: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  title: string;
  image_url: string;
};

export type CaseStudy = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestCaseStudy = {
  id: string;
  name: string;
  image_url: string;
  title: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestCaseStudyRaw = Omit<LatestCaseStudy, 'amount'> & {
  amount: number;
};

export type CaseStudyTable = {
  id: string;
  customer_id: string;
  name: string;
  title: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  title: string;
  image_url: string;
  total_case_studies: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  title: string;
  image_url: string;
  total_case_studies: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type CaseStudyForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
