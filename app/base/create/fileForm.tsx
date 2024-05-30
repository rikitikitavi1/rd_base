import {useForm} from "react-hook-form";
import {useCallback, useState} from "react";
import {Button} from "@/app/ui/Button/Button";
import {axiosApi} from "@/app/pages/api/axiosApi";
import {debounce} from "lodash";

type FormValues = {
    file: FileList;
};
type FormProps = {
    onFileChange: (file: any) => void
};
export const FileForm = () => {

    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>()
    const [comment, setComment] = useState('');

    const handleCommentChange = (e: any) => {
        setComment(e.target.value);
    };

    const debouncedHandleFileNameChange: any = useCallback(
        debounce((value: string) => setFileName(value), 300),
        []
    );
    const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedHandleFileNameChange(e.target.value);
    };
    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        // @ts-ignore
        formData.append('pdf_file', file);
        // @ts-ignore
        formData.append('name', fileName); // Пример дополнительного поля

        try {
            const response = await axiosApi.post('/rd_base/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex justify-start w-lvw'>
            <div className='flex flex-col'>
                <div className='mb-2'>
                    <label className='mr-2'>Введите название файла:</label>
                    <input onChange={handleFileNameChange} className=' w-full'/>
                </div>
                <div className='mb-2'>
                    <label className='mr-2'>Выберите файл:</label>
                    <input type="file" accept="application/pdf"
                           className='bg-white rounded-md text-black w-full' onChange={handleFileChange}/>
                </div>
                <div className='mb-2'>
                    <label className='mr-2'>Введите комментарий к файлу: </label>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        className="w-full"
                    />
                </div>
                <Button     // @ts-ignore
                    type="submit" className='mt-6'>Загрузить</Button>
            </div>
        </form>
    )
}