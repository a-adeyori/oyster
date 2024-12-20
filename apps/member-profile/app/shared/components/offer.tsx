import { Link, useSearchParams } from '@remix-run/react';
import { type PropsWithChildren } from 'react';
import { Edit } from 'react-feather';

import { getIconButtonCn, Text } from '@oyster/ui';

import { Card } from '@/shared/components/card';

// Edit Offer Button

type EditOfferButtonProps = {
  hasWritePermission: boolean;
  pathname: string;
};

export function EditOfferButton({
  hasWritePermission,
  pathname,
}: EditOfferButtonProps) {
  const [searchParams] = useSearchParams();

  if (!hasWritePermission) {
    return null;
  }

  return (
    <>
      <Link
        className={getIconButtonCn({
          backgroundColor: 'gray-100',
          backgroundColorOnHover: 'gray-200',
        })}
        to={{
          pathname,
          search: searchParams.toString(),
        }}
      >
        <Edit />
      </Link>

      <div className="h-6 w-[1px] bg-gray-100" />
    </>
  );
}

// Offer Aggregation

type OfferAggregationProps = {
  label: string;
  value: string | number | null | undefined;
};

export function OfferAggregation({ label, value }: OfferAggregationProps) {
  return (
    <Card className="gap-1">
      <Text color="gray-500" variant="sm">
        {label}
      </Text>
      <Text variant="2xl">{value}</Text>
    </Card>
  );
}

export function OfferAggregationGroup({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3">
      {children}
    </div>
  );
}

// Offer Detail

type OfferDetailProps = {
  label: string;
  value: string | number | null | undefined;
};

export function OfferDetail({ label, value }: OfferDetailProps) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <Text color="gray-500" variant="sm">
        {label}
      </Text>

      <Text>{value}</Text>
    </div>
  );
}

// Offer Section

export function OfferSection({ children }: PropsWithChildren) {
  return <section className="grid gap-4 sm:grid-cols-2">{children}</section>;
}

// Offer Title

type OfferTitleProps = {
  postedAt: string;
  role: string;
};

export function OfferTitle({ postedAt, role }: OfferTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <Text variant="lg">{role}</Text>

      <Text color="gray-500" variant="sm">
        Posted {postedAt} ago
      </Text>
    </div>
  );
}
