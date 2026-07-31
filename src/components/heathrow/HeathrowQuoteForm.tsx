"use client";

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';

import {
  heathrowQuoteServices,
  heathrowQuoteTerminals,
} from '@/mocks/heathrow';

type HeathrowQuoteState = {
  terminal: string;
  service: string;
  arrivalDate: string;
  arrivalTime: string;
  returnDate: string;
  returnTime: string;
};

export default function HeathrowQuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<HeathrowQuoteState>({
    terminal: '',
    service: '',
    arrivalDate: '',
    arrivalTime: '',
    returnDate: '',
    returnTime: '',
  });

  const updateField = (field: keyof HeathrowQuoteState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      airport: 'London Heathrow (LHR)',
      terminal: formData.terminal,
      service: formData.service,
      arrivalDate: formData.arrivalDate,
      arrivalTime: formData.arrivalTime,
      returnDate: formData.returnDate,
      returnTime: formData.returnTime,
    });

    router.push(`/quote?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/70 bg-white p-4 text-orbit-text shadow-2xl md:p-5"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-normal text-orbit-primary">
            <i className="ri-timer-flash-line" />
            3 minute booking
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-orbit-text">
            Check Heathrow prices
          </h2>
          <p className="mt-1 text-sm text-orbit-text-muted">
            Terminal parking quotes for T2, T3, T4 and T5.
          </p>
        </div>
        <span className="rounded-xl bg-orange-50 px-3 py-2 text-right text-xs font-bold leading-tight text-orbit-accent">
          Save up to
          <span className="block text-lg">GBP 161</span>
        </span>
      </div>

      <div className="grid gap-3.5">
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-orbit-text">
          Airport
          <input
            value="London Heathrow (LHR)"
            readOnly
            className="h-12 min-w-0 rounded-lg border border-orbit-border bg-orbit-bg px-3 text-sm font-semibold text-orbit-text"
          />
        </label>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <SelectField
            label="Terminal"
            value={formData.terminal}
            onChange={(value) => updateField('terminal', value)}
            options={heathrowQuoteTerminals}
            placeholder="Select terminal"
          />
          <SelectField
            label="Service"
            value={formData.service}
            onChange={(value) => updateField('service', value)}
            options={heathrowQuoteServices}
            placeholder="Select service"
          />
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <DateTimeFields
            label="Drop-off"
            dateName="arrivalDate"
            timeName="arrivalTime"
            dateValue={formData.arrivalDate}
            timeValue={formData.arrivalTime}
            onDateChange={(value) => updateField('arrivalDate', value)}
            onTimeChange={(value) => updateField('arrivalTime', value)}
          />
          <DateTimeFields
            label="Return"
            dateName="returnDate"
            timeName="returnTime"
            dateValue={formData.returnDate}
            timeValue={formData.returnTime}
            onDateChange={(value) => updateField('returnDate', value)}
            onTimeChange={(value) => updateField('returnTime', value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-orbit-accent px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-orange-600"
      >
        Show Me The Saving
        <i className="ri-arrow-right-line" />
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-orbit-text-muted">
        <span className="rounded-lg bg-orbit-bg px-2 py-2">No fees</span>
        <span className="rounded-lg bg-orbit-bg px-2 py-2">Secure pay</span>
        <span className="rounded-lg bg-orbit-bg px-2 py-2">Instant email</span>
      </div>
    </form>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-orbit-text">
      {label}
      <select
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full min-w-0 truncate rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function DateTimeFields({
  label,
  dateName,
  timeName,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
}: {
  label: string;
  dateName: string;
  timeName: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
}) {
  return (
    <fieldset className="grid min-w-0 gap-1.5">
      <legend className="text-sm font-semibold text-orbit-text">{label}</legend>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_96px] gap-2 sm:grid-cols-[minmax(0,1fr)_108px]">
        <input
          required
          type="date"
          name={dateName}
          value={dateValue}
          onChange={(event) => onDateChange(event.target.value)}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
        <input
          required
          type="time"
          name={timeName}
          value={timeValue}
          onChange={(event) => onTimeChange(event.target.value)}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
      </div>
    </fieldset>
  );
}
