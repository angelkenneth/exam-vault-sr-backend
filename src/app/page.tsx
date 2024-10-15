"use client";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {PostLead, useMutationCreateLead} from "@/lib/leads/network/post";
import {useEffect} from "react";
import {postLeadSchema} from "@/lib/leads/validation/post";
import Link from "next/link";

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
  const [createLead, {loading, data, error}] = useMutationCreateLead();
  const router = useRouter()
  const onSubmit = (input: PostLead) => {
    const {data} = postLeadSchema.safeParse(input);
    // TODO handle error
    return createLead({variables: {input: data}}).then()
  };
  useEffect(() => {
    if (data) {
      router.push(`/leads/${data.createLead.id}`);
    }
  }, [data, router])
  const fieldErrorEl = () => {
    if (error) {
      return <div>({error.message})</div>
    }
  }

  return (
    <>
      <h1>New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", {required: true})} />
        </div>
        <div>
          <label>Postcode</label>
          <input type="text" {...register("postcode", {required: true})} />
        </div>
        {fieldErrorEl()}
        <div>
          <br/>
          <button type="submit">{loading ? 'Submitting...' : 'Submit'}</button>
        </div>
        <p>
          <Link href="/leads">See other responses</Link>
        </p>
      </form>
    </>
  )
}
