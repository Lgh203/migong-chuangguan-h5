# -*- coding: utf-8 -*-
import os
import io
import json

GameNme = "DaZhen_NZBTG"
BundleName = 'Audio'


def listdir(path, list_name):
    for file in os.listdir(path):
        file_path = os.path.join(path, file)
        if os.path.isdir(file_path):
            listdir(file_path, list_name)
        elif os.path.splitext(file_path)[1] == '.mp3':
            text = 'Audio\\'
            text1 = '.mp3'
            length = len(file_path)
            idx = file_path.find(text)
            if idx != -1:
                idx = idx + len(text)
                file_path = file_path[idx:(length)]
            idx = file_path.find(text1)
            if idx != -1:
                file_path = file_path[0:idx]
            file_path = file_path.replace('\\', '/')
            list_name.append(file_path)
            print(text, "+++++", file_path)
# -*- coding: utf-8 -*-

# import os


# def file_name(file_dir):
    # for root, dirs, files in os.walk(file_dir):
        # print(root) #当前目录路径
        # print(dirs) #当前路径下所有子目录
        # print(files) #当前路径下所有非目录子文件
if __name__ == '__main__':
    curPath = os.path.dirname(os.path.abspath(__file__))
    name_list = []
    listdir(curPath, name_list)
    # file_name(curPath)
    # wreteList = 'module.exports = ['+','.join(name_list)+']'
    text = '\\assets\\'
    goalPath = 'DaZhen_NZBTG\\Script\\Config\\'
    length = len(curPath)
    idx = curPath.find(text)
    if idx != -1:
        idx = idx + len(text)
        curPath = curPath[0:idx]+goalPath
    jsonPath = os.path.join(curPath, "AudioConfig.ts")  # 写入路径
    print(jsonPath)
    dirname = os.path.dirname(jsonPath)
    if not os.path.exists(dirname):
        os.makedirs(dirname)
    with io.open(jsonPath, 'w', encoding='utf-8') as f:  # 按照对应路径写入
        f.write('export const AudioConfig= ')
        f.write(json.dumps(name_list, ensure_ascii=False, indent=4, sort_keys=True))
