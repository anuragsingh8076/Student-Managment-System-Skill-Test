import { api, Tag } from '@/api';
import {
  AddStudent,
  GetStudentDetailProps,
  GetTeachers,
  ReviewStudentStatusRequest,
  StudentData,
  StudentFilter,
  StudentProps,
  StudentPropsWithId
} from '../types';
import { getQueryString } from '@/utils/helpers/get-query-string';

export const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get all students with filters
    getStudents: builder.query<StudentData, StudentFilter>({
      query: (payload) => {
        const queryString = getQueryString(payload);
        return `/students${queryString}`;
      },
      providesTags: (result) =>
        result?.students?.map(({ id }) => {
          return { type: Tag.STUDENTS, id };
        }) || [{ type: Tag.STUDENTS }]
    }),

    // ✅ Get single student (by ID or self profile)
    getStudentDetail: builder.query<GetStudentDetailProps, string | undefined>({
      query: (id) => (id ? `/students/${id}` : `/account/me`),
      providesTags: (result) => (result ? [{ type: Tag.STUDENTS, id: result.id }] : [])
    }),

    // ✅ Review student status
    reviewStudentStatus: builder.mutation<{ message: string }, ReviewStudentStatusRequest>({
      query: ({ id, status }) => ({
        url: `/students/${id}/status`,
        method: 'POST',
        body: { status }
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: Tag.STUDENTS, id }]
    }),

    // ✅ Add studentcl
    addStudent: builder.mutation<AddStudent, StudentProps>({
      query: (payload) => ({
        url: `/students`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: [Tag.STUDENTS]
    }),

    // ✅ Update student
    updateStudent: builder.mutation<{ message: string }, StudentPropsWithId>({
      query: ({ id, ...payload }) => ({
        url: `/students/${id}`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: Tag.STUDENTS, id }]
    }),

    // ✅ Delete student (NEW)
    deleteStudent: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_result, _error, id) => [{ type: Tag.STUDENTS, id }]
    }),

    // ✅ Get teachers (extra API)
    getTeachers: builder.query<GetTeachers, void>({
      query: () => `/teachers`
    })
  })
});

export const {
  useGetStudentsQuery,
  useLazyGetStudentDetailQuery,
  useReviewStudentStatusMutation,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation, // ✅ added delete
  useGetTeachersQuery
} = studentApi;

