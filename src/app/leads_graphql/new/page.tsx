"use client";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {PostLead, useMutationCreateLead} from "@/lib/leads/network-graphql/post";
import {useEffect} from "react";
import {postLeadSchema} from "@/lib/leads/validation/post";
import Link from "next/link";
import {serviceDisplayMap, serviceList} from "@/lib/leads/local/services";

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
  const [createLead, {loading, data, error}] = useMutationCreateLead();
  const router = useRouter()
  const onSubmit = (input: PostLead) => {
    const {data} = postLeadSchema.safeParse(input);
    // TODO handle error
    return createLead({variables: {input: data}});
  };
  useEffect(() => {
    if (data) {
      router.push(`/leads_graphql/${data.createLead.id}`);
    }
  }, [data, router])
  const fieldErrorEl = () => {
    if (error) {
      return <div>({error.message})</div>
    }
  }

  return (
    <>
      <h1>Express your interest in Brighte&apos;s new product!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register("name", {required: true})} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email", {required: true})} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" type="tel" inputMode="tel" {...register("mobile", {required: true})} />
        </div>
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" type="text" {...register("postcode", {required: true})} />
        </div>
        <div>
          <label htmlFor="service">Service</label>
          <select id="service" {...register("service", {required: true})}>
            {serviceList.map(service => (
              <option key={service} value={service}>{serviceDisplayMap[service]}</option>
            ))}
          </select>
        </div>
        {fieldErrorEl()}
        <div>
          <br/>
          <button type="submit">{loading ? 'Submitting...' : 'Submit'}</button>
        </div>
        <p>
          <Link href="/leads_graphql">See other responses</Link>
        </p>
      </form>
    </>
  )
}
