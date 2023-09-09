import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateSetting as updateSettingApi } from "../../services/apiSettings"

export function useEditSetting() {
    const queryClient = useQueryClient()


  const { mutate: updateSetting, isLoading: isUpditing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Cabin successfully updated')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: err => toast.error(err.message)
  })
    
    return {isUpditing, updateSetting}

}