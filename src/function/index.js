import { useQuery } from "react-query";
import { useQueryClient, useMutation } from "react-query";
import { axiosRequest } from "../service";
import toast from "react-hot-toast";

const useMutationAsync = (request, queryKeys = []) => {
  const queryClient = useQueryClient();

  const mutationAsync = useMutation(
    async (newAnnouncement) => {
      const response = await axiosRequest(
        request.method,
        request.url,
        newAnnouncement
      );
      return response.data;
    },
    {
      onSuccess: (newAnnouncement) => {
        if (request.method === "patch") {
          queryClient.setQueryData(queryKeys, newAnnouncement);
        } else {
          queryClient.invalidateQueries(queryKeys);
        }
      },
    }
  );

  return { mutationAsync };
};

const FetchAdminPost = (
  isArchived,
  filterValues = "",
  page = "",
  totalPage = "",
  search = ""
) => {
  const {
    data: announcementsData,
    isLoading: announcementsLoading,
    isFetching: announcementsFetching,
    error: announcementsError,
    refetch: refetchAnnouncements,
  } = useQuery(
    ["announcements"],
    () =>
      axiosRequest(
        "get",
        `/api/announcements/getAnnouncements?isArchived=${isArchived}&category=${filterValues}&page=${page}&pageSize=${totalPage}&search=${search}`
      ),
    {
      retry: 3,
    }
  );
  if (announcementsError) {
    throw new Error("Couldn't find announcements");
  }

  return {
    announcementsData,
    announcementsFetching,
    announcementsLoading,
    announcementsError,
    refetchAnnouncements,
  };
};

// const useDeleteResource = (endpoint, options = {}) => {
// 	const queryClient = useQueryClient();
// 	const mutation = useMutation(
// 	  async (id) => {
// 		const response = await axiosRequest("delete", `${endpoint}/${id}`);
// 		return response.data;
// 	  },
// 	  {
// 		onSuccess: () => {
// 		  queryClient.invalidateQueries(options.queryKey || []);
// 		},
// 		...options.mutationOptions,
// 	  }
// 	);

// 	const deleteResource = async (id) => {
// 	  try {
// 		await toast.promise(mutation.mutateAsync(id), {
// 		  loading: options.loadingMessage || `${location.pathname.includes('pending') ? 'Cancelling...' : 'Deleting...'}`,
// 		  success: options.successMessage || `${location.pathname.includes('pending') ? 'Order Cancel' : 'Deleted'}`,
// 		  error: options.errorMessage || "Error when Deleting",
// 		});
// 	  } catch (error) {
// 		toast.error(error);
// 	  }
// 	};

// 	return { deleteResource };
//   };

// const findSelectedItemById = (dataArray, itemId) => {
// 	return dataArray?.find((item) => itemId === item._id);
//   };
export { useMutationAsync, FetchAdminPost };
