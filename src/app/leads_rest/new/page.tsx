"use client";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {PostLead} from "@/lib/leads/network-graphql/create";
import {useCallback, useState} from "react";
import {createLeadSchema} from "@/lib/leads/validation/create";
import Link from "next/link";
import {serviceDisplayMap, serviceList} from "@/lib/leads/local/services";
import {useCreateLeadRestMutation} from "@/lib/leads/network-api/create";
import {ZodIssue} from "zod";

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
  const {mutate, isPending} = useCreateLeadRestMutation();
  const router = useRouter()
  const doMutate = useCallback(
    (input: PostLead) => {
      const {error, data} = createLeadSchema.safeParse(input);
      if (error) {
        setError(error.issues);
        return error
      }
      mutate(data, {
        onSuccess: (data) => {
          if (data.success) {
            router.push(`/leads_rest/${data.json.id}`);
            return
          }
          setError(data.json);
        },
      });
    },
    [router, mutate]
  );
  const [error, setError] = useState<ZodIssue[]>([]);
  const disabled = isPending;
  const fieldErrorEl = useCallback((fieldName: string) => {
    const zodError = error.find((e) => e.path[0] === fieldName);
    if (zodError) {
      return <div>({zodError.message})</div>;
    }
  }, [error]);

  return (
    <>
      <h1>Express your interest in Brighte&apos;s new product!</h1>
      <form onSubmit={handleSubmit(doMutate)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register("name", {required: true, disabled})} />
          {fieldErrorEl('name')}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email", {required: true, disabled})} />
          {fieldErrorEl('email')}
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" type="tel" inputMode="tel" {...register("mobile", {required: true, disabled})} />
          {fieldErrorEl('mobile')}
        </div>
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" type="text" {...register("postcode", {required: true, disabled})} />
          {fieldErrorEl('postcode')}
        </div>
        <div>
          <label htmlFor="service">Service</label>
          <select id="service" {...register("service", {required: true, disabled})}>
            {serviceList.map(service => (
              <option key={service} value={service}>{serviceDisplayMap[service]}</option>
            ))}
          </select>
          {fieldErrorEl('service')}
        </div>
        <div>
          <br/>
          <button type="submit">{isPending ? 'Submitting...' : 'Submit'}</button>
        </div>
        <p>
          <Link href="/leads_rest">See other responses</Link>
        </p>
      </form>
    </>
  )
}
