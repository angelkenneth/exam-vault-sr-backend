"use client";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {PostLead, useMutationCreateLead} from "@/app/api/leads/_network/post";
import {useEffect} from "react";
import {postLeadSchema} from "@/app/api/leads/_validation/post";

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
      <h1>New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", {required: true})} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register("age", {required: true})} />
        </div>
        {fieldErrorEl()}
        <div>
          <br/>
          <button type="submit">{loading ? 'Submitting...' : 'Submit'}</button>
        </div>
      </form>
    </>
  )
}
